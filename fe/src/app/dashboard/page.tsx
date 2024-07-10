"use client";
import { Button } from "@/components/Button";
import useDashboardController from "./actions";

export default function Dashboard() {
  const { handleSubmit } = useDashboardController();

  return (
    <div className="lg:h-screen flex items-center lg:items-start justify-between">
      <h1>Página de dashboard</h1>

      <Button onClick={handleSubmit}>Sair</Button>
    </div>
  );
}
