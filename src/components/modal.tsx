import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Modal({content}: {content: String}) {
  return (
    <Dialog  >
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="w-screen py-10 h-screen overflow-y-scroll">
      <pre className="code-preview">
             <code>{content}</code>
           </pre>
        
       
      </DialogContent>
    </Dialog>
  )
}
