import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
function InviteUserForm() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data) => {
    console.log(`create project data: ${data}`);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="enter user email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

            <Button type="submit" className="w-full bg-slate-400 py-5">
              SENT INVITATION
            </Button>

        </form>
      </Form>
    </>
  );
}
export default InviteUserForm;
