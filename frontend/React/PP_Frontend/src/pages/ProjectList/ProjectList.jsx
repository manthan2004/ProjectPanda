import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";

const ProjectList = () => {
    return(
        <>
        <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
            <section className="filterSection">
                <Card className = "p-5 sticky top-10">
                    <div className="flex justify-between lg:w[20 rem]">
                        <p className="text-xl -tracking-wider">Filters</p>
                        <Button variant="ghost" size= "icon">
                            <MixerHorizontalIcon/>
                        </Button>
                    </div>

                    <CardContent className= "mt-6">

                    </CardContent>

                </Card>
            </section>
            <section className="projectListSection">

            </section>

        </div>
        </>
    )
}

export default ProjectList