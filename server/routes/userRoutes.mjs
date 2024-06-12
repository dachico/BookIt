import express from "express";
import * as authController from "../controllers/authController.mjs";
import * as userController from "../controllers/userController.mjs";

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.protect, authController.logout);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);

router.patch(
  "/updateHours",
  authController.protect,
  userController.updateHours
);

router.post("/refreshtoken", authController.refreshingToken);
router.route("/:id/hours").get(userController.getUserHours);

router.patch("/updateMe", authController.protect, userController.updateMe);
router.delete("/deleteMe", authController.protect, userController.deleteMe);

router.use(authController.protect);

router.get("/me", userController.getMe);
router.route("/").get(userController.getAllUsers);
router.route("/search").get(userController.getUserByName);

router.patch("/updateUserSettings", userController.updateUserSettings);

export default router;
