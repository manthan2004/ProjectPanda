import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createIssue } from "@/Redux/Issue/Action";
import { Description, DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CreateIssueForm = ({status}) => {
  const dispatch=useDispatch();
  const {id}=useParams()
  const form = useForm({
    defaultValues: {
      issueName: "",
      description: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(createIssue({title:data.issueName,description:data.description,projectId:id,status:status}))
    console.log(`create project data: `,data);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="issueName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="issue Name"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control} 
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="description"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        <DialogClose asChild>

          <Button type="submit" className="w-full bg-slate-400 py-5">
            Create Issue
          </Button>
        </DialogClose>
        </form>
      </Form>
    </>
  );
};
export default CreateIssueForm;
