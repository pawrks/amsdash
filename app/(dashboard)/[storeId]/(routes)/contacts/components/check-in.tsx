import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const CheckIn: React.FC = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Access List Check-In</CardTitle>
        <CardDescription>Check visitors in to the facility</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1 5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Visitor name" />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
