import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import NotAcceptingNewCasesNotice from "@/components/schedule/NotAcceptingNewCasesNotice";

interface IntakeSchedulerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Retained for API compatibility with existing callers; unused while the
   *  firm is not accepting new matters. */
  calLink?: string;
  /** Retained for API compatibility with existing callers; unused while the
   *  firm is not accepting new matters. */
  calNamespace?: string;
}

const IntakeSchedulerDialog = ({ open, onOpenChange }: IntakeSchedulerDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[96vw] max-h-[90vh] overflow-y-auto p-0">
        <div className="p-6">
          <DialogHeader className="sr-only">
            <DialogTitle>Currently Not Accepting New Client Matters</DialogTitle>
          </DialogHeader>
          <NotAcceptingNewCasesNotice compact />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IntakeSchedulerDialog;
