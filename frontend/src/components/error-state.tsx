"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ 
  title = "Something went wrong",
  message = "We encountered an error. Please try again.",
  onRetry 
}: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Card className="p-8 text-center max-w-md">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground mb-6">{message}</p>
        {onRetry && (
          <Button onClick={onRetry}>
            Try Again
          </Button>
        )}
      </Card>
    </div>
  );
}

export function EmptyState({ 
  title = "No items found",
  message = "There's nothing here yet.",
}: { title?: string; message?: string }) {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="text-center">
        <div className="text-6xl mb-4 opacity-20">📭</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{message}</p>
      </div>
    </div>
  );
}
