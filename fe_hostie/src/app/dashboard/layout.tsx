"use client";
import DashboardLayout from "@/layout/DashboardLayout";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
