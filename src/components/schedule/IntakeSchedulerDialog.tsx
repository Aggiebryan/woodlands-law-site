import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import IntakeForm from "@/components/schedule/IntakeForm";
import Cal from "@calcom/embed-react";
import { Check } from "lucide-react";

interface IntakeSchedulerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  calLink: string;
  calNamespace: string;
}

const IntakeSchedulerDialog = ({
  open,
  onOpenChange,
  calLink,
  calNamespace,
}: IntakeSchedulerDialogProps) => {
  const [intakeComplete, setIntakeComplete] = useState(false);
  const [intakeData, setIntakeData] = useState<Record<string, string> | null>(null);

  const handleClose = useCallback(
    (val: boolean) => {
      if (!val) {
        // Reset state on close
        setIntakeComplete(false);
        setIntakeData(null);
      }
      onOpenChange(val);
    },
    [onOpenChange]
  );

  const handleIntakeSuccess = (data: any) => {
    setIntakeData(data);
    setIntakeComplete(true);
  };

  // Build Cal.com prefill config from intake data
  const calConfig: Record<string, string> = { layout: "month_view" };
  if (intakeData) {
    calConfig.name = `${intakeData.firstName} ${intakeData.lastName}`;
    if (intakeData.email) calConfig.email = intakeData.email;
    calConfig.notes = `Matter: ${intakeData.matterType}\nUrgency: ${intakeData.urgencyLevel}\nCounty: ${intakeData.county || "N/A"}\nOpposing Party: ${intakeData.opposingParties || "N/A"}\n\nSummary: ${intakeData.summaryOfIssue}`;
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl w-[96vw] max-h-[90vh] overflow-y-auto p-0">
        {!intakeComplete ? (
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif">New Client Intake</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Complete the form below to begin your confidential case evaluation.
              </p>
            </DialogHeader>
            <div className="mt-6">
              <IntakeForm onSubmitSuccess={handleIntakeSuccess} />
            </div>
          </div>
        ) : (
          <div className="p-6">
            {/* Success Banner */}
            <div className="text-center mb-6 animate-in fade-in">
              <div className="w-[60px] h-[60px] border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-2">Intake Received</h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed mb-4">
                Thank you for contacting The Woodlands Law Firm. Please select a consultation time below.
              </p>
              <div className="inline-flex gap-8 border border-border rounded px-6 py-3">
                <div className="text-center">
                  <strong className="block text-sm text-foreground font-medium">832-626-0116</strong>
                  <span className="text-xs text-muted-foreground">Direct Line</span>
                </div>
                <div className="text-center">
                  <strong className="block text-sm text-foreground font-medium">admin@woodlands.law</strong>
                  <span className="text-xs text-muted-foreground">Firm Email</span>
                </div>
              </div>
            </div>

            {/* Cal.com Scheduler */}
            <div className="w-full h-[600px]">
              <Cal
                namespace={calNamespace}
                calLink={calLink}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={calConfig}
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default IntakeSchedulerDialog;
