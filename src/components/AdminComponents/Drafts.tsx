"use client";
import moment from "moment";

import "moment/locale/pl";
import { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { app, deleteMultipleDrafts } from "@/firebase";
import Products from "@/components/AdminComponents/Products";

export default function Drafts() {
  moment.locale("pl");
  const [drafts, setDrafts] = useState<any[]>([]);
  useEffect(() => {
    const ref = collection(getFirestore(app), "drafts");
    const unsub = onSnapshot(ref, (querySnapshot: any) => {
      const snapshotData: any[] = [];
      querySnapshot.forEach((doc: any) => {
        snapshotData.push(doc.data());
      });
      setDrafts(snapshotData);
    });
  }, []);
  return (
    <div>
      {" "}
      <h2 className="text-white font-bold text-3xl mx-auto w-max">
        Kopie robocze
      </h2>
      <Products
        array={drafts}
        deleteRows={deleteMultipleDrafts}
        place="drafts"
      />
    </div>
  );
}
