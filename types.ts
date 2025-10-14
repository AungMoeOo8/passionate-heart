import { ReactNode } from "react";

type AnnouncementProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

type NavLinkProps = {
  name: string;
  href: string;
};

type PersonProps = {
  id: number;
  name: string;
  image: string;
  position: string;
  roles: string[];
  biography: string;
  visibility: boolean;
  indexNumber: number;
};

type ServiceComponentProps = {
  image: string;
  text: React.ReactNode;
  reverse?: Boolean;
};

type ServiceProps = {
  id?: number;
  provider?: string;
  providedByName?: string;
  name: string;
  description: string;
  fees: { type: string, amount: number, description?: string }[];
  ending: string;
  visibility?: boolean;
  indexNumber?: number;
};

type CourseProps = {
  id: number,
  title: string,
  duration: string,
  instructor: string,
  guestLecturer: string,
  outlines: string[],
  visibility: boolean,
  indexNumber: number,
}

export type ActivityProps = {
  id: number,
  imageUrl: string,
  visibility: boolean
  indexNumber: number
}

export type {
  AnnouncementProps,
  NavLinkProps,
  PersonProps,
  ServiceComponentProps,
  ServiceProps,
  CourseProps
};
