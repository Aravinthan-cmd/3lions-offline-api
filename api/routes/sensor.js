import express from "express";
import { userData, userRegister,InsertData,getSensor,getallSensor,getNano,getNanoGraph,getLast,insertBtnData, getReportSensor, getSensorTime} from "../controllers/sensor.js";

const router = express.Router();

//register
router.post('/register',userRegister);

//login 
router.post('/login',userData);

router.get('/InsertData',InsertData);

router.get('/getsensor', getSensor);

router.get('/getallsensor', getallSensor);

//get time based
router.get('/gettimedata', getSensorTime);

router.get('/getReportsensor', getReportSensor);

router.get('/getNano',getNano);

router.get('/getNanoGraph', getNanoGraph);

router.get('/getLast',getLast);

//Btn
router.get('/getValue',insertBtnData);

export default router;