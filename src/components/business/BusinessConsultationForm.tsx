import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import NotAcceptingNewCasesNotice from "@/components/schedule/NotAcceptingNewCasesNotice";

interface BusinessConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BusinessConsultationForm = ({ open, onOpenChange }: BusinessConsultationFormProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>Currently Not Accepting New Client Matters</DialogTitle>
        </DialogHeader>
        <NotAcceptingNewCasesNotice compact />
      </DialogContent>
    </Dialog>
  );
};

export default BusinessConsultationForm;
