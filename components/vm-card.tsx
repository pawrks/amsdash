import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { VMAccordion } from './vm-accordion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ReplicationCheckbox } from './replication-checkbox'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

export const VMSetup = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Virtual Machines</CardTitle>
        <CardDescription>Step two - Configure VMs</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col py-4 space-y-1.5">
            <Label htmlFor="framework">Name</Label>
            <Input max={100} placeholder="VM Name" />
          </div>
          <div className="flex flex-col space-y-4">
            <Label htmlFor="framework">CPU Cores</Label>
            <Slider max={100} className="pb-4" />
            <Label htmlFor="framework">Memory</Label>
            <Slider max={100} className="pb-4" />
            <Label htmlFor="framework">NVMe Storage</Label>
            <Slider max={100} className="pb-4" />
          </div>
          <VMAccordion />
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
