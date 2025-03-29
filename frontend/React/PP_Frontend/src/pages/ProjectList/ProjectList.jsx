import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import ProjectCard from "../Project/ProjectCard";

export const tags = [
    

  "HTML", "CSS", "JavaScript", "TypeScript",
  "React.js", "Vue.js", "Angular", "Svelte", "Next.js",
    "Tailwind CSS", "Bootstrap", "Material UI", "Radix UI",
    "Redux", "Zustand", "Jotai", "ShadCN", "Chakra UI",
    "Jest", "Cypress", "Playwright",

  
  "Node.js", "Express.js", "NestJS", "Fastify", "Koa",
  "Python", "Django", "Flask", "FastAPI",
  "Java", "Spring Boot", "Micronaut",
  "Ruby on Rails", "Laravel",
  "GraphQL", "REST API", "gRPC",
  "Redis", "Memcached", "JWT Authentication",
  
  "PostgreSQL", "MySQL", "MariaDB", "MongoDB",
"Firebase Firestore", "Neo4j", "ArangoDB",
  "Elasticsearch", "TimescaleDB",

  
  "AWS", "Google Cloud", "Azure", "DigitalOcean",
    "Docker", "Kubernetes", "GitHub Actions", "Terraform",
    "Prometheus", "Grafana",

"Kafka", "Pusher", "Strapi", "Contentful",
  "Stripe", "PayPal", "Socket.io", "RabbitMQ",
  

]
const ProjectList = () => {

    const[keyword, setKeyword] = useState("");
    const handleFilterChange = (section, value) =>{
        console.log(`value ${value}`, section)
    }

    const handleSearchChange = (e) =>{
        setKeyword(e.target.value)
    }
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
                    <ScrollArea className="space-y-7 h-[70vh]">
                        <div>
                            <h1 className="pb-3 text-gray-400 border-b">
                                Category
                            </h1>
                            <div className="pt-5">
                                <RadioGroup className="space-y-3 pt 5" defaulValue = "all" onValueChange= {(value) => handleFilterChange("category", value)}>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value = "all" id = "r1" />
                                        <Label htlmFor="r1" >All</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value = "fullstack" id = "r2" />
                                        <Label htlmFor="r2" >Fullstack</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value = "frontend" id = "r3" />
                                        <Label htlmFor="r3" >Frontend</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value = "backend" id = "r4" />
                                        <Label htlmFor="r4" >Backend</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                        <div className="pt-9">
                            <h1 className="pb-3 text-gray-400 border-b">
                                Tag
                            </h1>
                            <div className="pt-5">
                                <RadioGroup className="space-y-3 pt 5" defaulValue = "all" onValueChange= {(value) => handleFilterChange("tag", value)}>
                                   {tags.map((item)=> <div key={item} className="flex items-center gap-2">
                                        <RadioGroupItem value = {item} id = {`r1- ${item}`} />
                                        <Label htlmFor={`r1- ${item}`} >{item}</Label>
                                    </div>)}
                                    
                                </RadioGroup>
                            </div>
                        </div>
                        </ScrollArea>
                    </CardContent>

                </Card>
                
            </section>
            <section className="projectListSection w-full lg:w-[48rem]">
                <div className="flex gap-2 items-center pb-5 justify-between">
                    <div className="relative p-0 w-full">
                        <Input
                        onChange = {handleSearchChange}
                        placeholder="search project"
                        className="40 px-9" />
                        <MagnifyingGlassIcon className="absolute top-3 left-4"/>

                    </div>
                </div>
                <div>
                    <div className="space-y-5 min-h-[74vh]">
                        {
                           keyword?[1,1,1].map((item) => <ProjectCard key={item} />): [1,1,1,1,1,1].map((item) => <ProjectCard key={item}/>)
                        }
                    </div>
                </div>
            </section>

        </div>
        </>
    )
}

export default ProjectList



