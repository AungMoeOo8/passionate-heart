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

type CounsellorProps = {
  image: string;
  name: string;
  bio: string;
  roles: string[];
};

type ServiceComponentProps = {
  image: string;
  text: React.ReactNode;
  reverse?: Boolean;
};

type ServiceProps = {
  title: string;
  description: string;
  fees: { type: string; amount: string; description?: string }[];
  ending?: string;
};

type CourseProps = {
  title: string,
  instructor: string,
  gustLecturer?: string,
  duration: string,
  outlines: string[],
}

export type {
  AnnouncementProps,
  NavLinkProps,
  CounsellorProps,
  ServiceComponentProps,
  ServiceProps,
  CourseProps
};
