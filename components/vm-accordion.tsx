import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { ReplicationCheckbox } from './replication-checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

export function VMAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Public IP</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center ml-4 space-x-2">
            <Checkbox id="public_ip" />
            <label
              htmlFor="public_ip"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Yes
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Operating System</AccordionTrigger>
        <AccordionContent>
          <Select>
            <SelectTrigger className="w-[420px]">
              <SelectValue placeholder="Please select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Windows Server 2016</SelectItem>
              <SelectItem value="dark">Windows Server 2019</SelectItem>
              <SelectItem value="system">Windows Server 2022</SelectItem>
            </SelectContent>
          </Select>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Live Replication</AccordionTrigger>
        <AccordionContent>
          <ReplicationCheckbox />
          <div className="mt-4">
            <Label htmlFor="framework">Snapshot Retention (Days)</Label>
            <Slider max={100} className="py-4" />
            <Label htmlFor="framework"># of VM Snapshots</Label>
            <Slider max={100} className="py-4" />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Backup Retention (Days)</AccordionTrigger>
        <AccordionContent>
          <Slider max={100} className="py-3" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
