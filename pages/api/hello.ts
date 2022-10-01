// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import dbMiddleware, { ExtendedRequest } from "../../middlewares/dbMiddleware";
import { Timestamp, ObjectId } from "mongodb";

interface ResponseData {
  appointment: {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    availableTime: {
      counsellor: string | undefined;
      time: Timestamp | undefined;
    };
  };
}

interface Appointment {
  name: string;
  email: string;
  phone: string;
  availableTimeId: ObjectId;
}

interface AvailableTime {
  counsellor: string;
  appointmentId?: ObjectId;
  time: Timestamp;
}

const appointment: Appointment = {
  name: "Ko Hein",
  email: "hein@gmail.com",
  phone: "09775089753",
  availableTimeId: new ObjectId("633677466c6bb4b5ff6fedaa"),
};

const availableTime: AvailableTime = {
  counsellor: "Ma Thi",
  appointmentId: undefined,
  time: Timestamp.fromNumber(3),
};

const handler = nextConnect<ExtendedRequest, NextApiResponse>();

handler.use(dbMiddleware);

handler.get(async (req, res) => {
  // const result = await req.db
  //   .collection<AvailableTime>("available-times")
  //   .find({ counsellor: "U Myint Maung" })
  //   .toArray();

  // const result = await req.db
  //   .collection<AvailableTime>("available-times")
  //   .insertOne(availableTime);

  const appointmentData = await req.db
    .collection<Appointment>("appointments")
    .findOne({ availableTimeId: new ObjectId("633677466c6bb4b5ff6fedaa") });

  const availableTimeData = await req.db
    .collection<AvailableTime>("available-times")
    .findOne({ appointmentId: appointmentData?._id });

  // const result = await req.db
  //   .collection<Appointment>("appointments")
  //   .insertOne(appointment);

  res.json({
    appointmentData,
    appointmentId: appointmentData?._id,
    isSame: new ObjectId(appointmentData?._id) == appointmentData?._id,
  });

  // res.json({
  //   appointment: {
  //     name: appointmentData?.name,
  //     email: appointmentData?.email,
  //     phone: appointmentData?.phone,
  //     availableTime: {
  //       counsellor: availableTimeData?.counsellor,
  //       time: availableTimeData?.time,
  //     },
  //   },
  // });
});

export default handler;
