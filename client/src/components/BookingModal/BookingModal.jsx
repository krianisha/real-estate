import React, { useContext, useState } from 'react';
import { Button, Modal } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import '@mantine/dates/styles.css';
import { useMutation } from 'react-query';
import UserDetailContext from '../../context/UserDetailContext';
import { bookVisit } from '../../utils/api';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

function BookingModal({ opened, setOpened, email, propertyId }) {
  const [value, setValue] = useState(null);
  const { userDetails: { token }, setUserDetails } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...(prev.bookings || []), // Ensure bookings is an array before spreading
        {
          id: propertyId,
          date: dayjs(value).format('DD/MM/YYYY'),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });

  const handleDateChange = (date) => {
    setValue(date); // Ensure value is updated correctly on date change
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter" style={{ gap: "1rem" }}>
        <DatePicker
          value={value}
          onChange={setValue}
          minDate={new Date()}
        />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book visit
        </Button>
      </div>
    </Modal>
  );
}

export default BookingModal;
