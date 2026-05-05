import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import NotAcceptingNewCasesNotice from "@/components/schedule/NotAcceptingNewCasesNotice";

interface EstateConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Retained for API compatibility with existing callers; unused while the
   *  firm is not accepting new matters. */
  webhookUrl?: string;
}

const EstateConsultationForm = ({ open, onOpenChange }: EstateConsultationFormProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md md:max-w-lg overflow-y-auto max-h-[90vh]">
        <DialogHeader className="sr-only">
          <DialogTitle>Currently Not Accepting New Client Matters</DialogTitle>
        </DialogHeader>
        <NotAcceptingNewCasesNotice compact />
      </DialogContent>
    </Dialog>
  );
};

export default EstateConsultationForm;
