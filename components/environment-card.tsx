import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'

export const EnvironmentSetup = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Center Environment</CardTitle>
        <CardDescription>
          Step one - Create environment to manage VMs & services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col py-4 space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Environment name" />
          </div>
          <div className="flex flex-col space-y-4">
            <Label htmlFor="framework">Network Pipe Size (Mbps)</Label>
            <Slider max={100} className="pb-4" />
            <Label htmlFor="framework">VPN Users</Label>
            <Slider max={100} className="pb-4" />
            <Label htmlFor="framework">Home Network Gateway</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="dallas">Dallas</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="slc">Salt Lake City</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
