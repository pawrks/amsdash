import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { BsShieldCheck, BsShieldExclamation, BsTools } from 'react-icons/bs'

export const CheckIn: React.FC = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle className="text-2xl">Check-In</CardTitle>
        <CardDescription>Check visitors in to the facility</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="search">Search</Label>
              <Input id="search" placeholder="Company or visitor names" />
              <Button>Search</Button>
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Company name" />
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Visitor name" />
              <Label htmlFor="idNumber">ID Number</Label>
              <Input id="idNumber" placeholder="Government issued ID number" />
              <RadioGroup
                defaultValue="card"
                className="grid grid-cols-3 gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="customer"
                    id="customer"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="customer"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:bg-green-500 dark:hover:bg-green-600 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <BsShieldCheck className="mb-3 h-6 w-6" />
                    Customer
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="visitor"
                    id="visitor"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="visitor"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:bg-red-500 dark:hover:bg-red-600 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <BsShieldExclamation className="mb-3 h-6 w-6" />
                    Visitor
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="vendor"
                    id="vendor"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="vendor"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:bg-yellow-300 dark:hover:bg-yellow-400 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <BsTools className="mb-3 h-6 w-6" />
                    Vendor
                  </Label>
                </div>
              </RadioGroup>
              <Button>Check-In</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
