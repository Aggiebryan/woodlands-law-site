import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import NotAcceptingNewCasesNotice from "@/components/schedule/NotAcceptingNewCasesNotice";

interface CaseEvaluationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Retained for API compatibility with existing callers; unused while the
   *  firm is not accepting new matters. */
  webhookUrl?: string;
}

const CaseEvaluationForm = ({ open, onOpenChange }: CaseEvaluationFormProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>Currently Not Accepting New Client Matters</DialogTitle>
        </DialogHeader>
        <NotAcceptingNewCasesNotice compact />
      </DialogContent>
    </Dialog>
  );
};

export default CaseEvaluationForm;
