import { Subject } from "@/types";
import { GraduationCap, School } from "lucide-react";

export const USER_ROLES = {
  STUDENT: "student",
  TEACHER: "teacher",
  ADMIN: "admin",
};

export const ROLE_OPTIONS = [
  {
    value: USER_ROLES.STUDENT,
    label: "Student",
    icon: GraduationCap,
  },
  {
    value: USER_ROLES.TEACHER,
    label: "Teacher",
    icon: School,
  },
];

export const DEPARTMENTS = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Economics",
  "Business Administration",
  "Engineering",
  "Psychology",
  "Sociology",
  "Political Science",
  "Philosophy",
  "Education",
  "Fine Arts",
  "Music",
  "Physical Education",
  "Law",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const CLOUDINARY_UPLOAD_URL = getEnvVar("VITE_CLOUDINARY_UPLOAD_URL");
export const CLOUDINARY_CLOUD_NAME = getEnvVar("VITE_CLOUDINARY_CLOUD_NAME");
export const BACKEND_BASE_URL = getEnvVar("VITE_BACKEND_BASE_URL");

export const BASE_URL = import.meta.env.VITE_API_URL;
export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY;

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

export const CLOUDINARY_UPLOAD_PRESET = getEnvVar(
  "VITE_CLOUDINARY_UPLOAD_PRESET",
);

export const teachers = [
  {
    id: "1",
    name: "John Doe",
  },
  {
    id: "2",
    name: "Jane Smith",
  },
  {
    id: "3",
    name: "Dr. Alan Turing",
  },
];

export const subjects = [
  {
    id: 1,
    name: "Mathematics",
    code: "MATH",
  },
  {
    id: 2,
    name: "Computer Science",
    code: "CS",
  },
  {
    id: 3,
    name: "Physics",
    code: "PHY",
  },
  {
    id: 4,
    name: "Chemistry",
    code: "CHEM",
  },
];

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science & Engineering",
    description:
      "An entry-level course covering the fundamentals of algorithmic thinking, data structures, and basic programming logic using Python.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "BIO204",
    name: "Genetics and Evolution",
    department: "Biological Sciences",
    description:
      "A comprehensive study of hereditary patterns, DNA replication, and the mechanisms of evolutionary change across different species.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ECON302",
    name: "Macroeconomic Theory",
    department: "Economics",
    description:
      "An advanced look at national income determination, inflation, unemployment, and the impact of fiscal and monetary policies on global markets.",
    createdAt: new Date().toISOString(),
  },
];
