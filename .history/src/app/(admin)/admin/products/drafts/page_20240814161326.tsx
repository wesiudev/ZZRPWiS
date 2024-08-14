"use client";
import moment from "moment";

import "moment/locale/pl";
import { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { app, deleteMultipleDrafts } from "@/firebase";
import Products from "@/components/AdminComponents/Products";
export default function Page() {
  return <div className="pt-24"></div>;
}
