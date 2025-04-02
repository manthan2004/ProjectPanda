import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/Redux/Auth/Action";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"

const Signup=()=>{
    const form = useForm({
        defaultValues: {
          fullName:"",
          email: "",
          password:"",
          // username:"",
        },
      });
      const dispatch=useDispatch()
      const onSubmit = (data) => {
        dispatch(register(data))
        console.log(`create project data: `,data);
      };
    return(
        <div className="space-y-5">
            <h1>Register</h1>
            <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Username..."
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                  <FormItem>
                      <FormControl>
                          <Input {...field} type="text" placeholder="Full Name..." />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
          /> */}

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
                    placeholder="Email ID..."
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Password..."
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

            <Button type="submit" className="w-full bg-slate-400 py-5">
              Register
            </Button>

        </form>
      </Form>
        </div>
    )
}
export default Signup