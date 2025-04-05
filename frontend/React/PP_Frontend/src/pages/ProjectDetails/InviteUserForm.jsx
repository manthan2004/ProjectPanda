import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { inviteToProject } from "@/Redux/Project/Action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
function InviteUserForm() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });
  const dispatch=useDispatch();
  const {id}=useParams()
  const onSubmit = (data) => {
    dispatch(inviteToProject({email:data.email,projectId:id}))
    console.log(`create project data: `,data);
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
