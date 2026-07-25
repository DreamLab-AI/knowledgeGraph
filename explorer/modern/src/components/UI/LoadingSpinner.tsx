import { Spinner } from "@/components/ui/spinner"

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Spinner size="lg" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}
