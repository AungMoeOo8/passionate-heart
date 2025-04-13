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
  id: string;
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
  id: string;
  provider: string;
  name: string;
  description: string;
  fees: { type: string, amount: number, description: string }[];
  ending: string;
  visibility: boolean;
  indexNumber: number;
};

type CourseProps = {
  id: string,
  title: string,
  duration: string,
  instructor: string,
  guestLecturer: string,
  outlines: string[],
  visibility: boolean,
  indexNumber: number,
}

export type {
  AnnouncementProps,
  NavLinkProps,
  PersonProps,
  ServiceComponentProps,
  ServiceProps,
  CourseProps
};
