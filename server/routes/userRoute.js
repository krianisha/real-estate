import express from "express";
import { createUser,bookVisit,getAllBookings,cancelBooking,toFav,getAllFavorites} from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

router.post("/register",jwtCheck,createUser);
router.post("/bookVisit/:id",jwtCheck,bookVisit);
 router.post("/allBookings",getAllBookings);
router.post("/removeBooking/:id",jwtCheck,cancelBooking);
router.post("/toFav/:rid",jwtCheck,toFav);
router.post("/allFav/",jwtCheck,getAllFavorites);
 export { router as userRoute };
