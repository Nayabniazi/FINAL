import Layout from "@/components/layout/Layout"


import Newsletter1 from "@/components/sections/homepage2/Newsletter1"

import Info6 from "@/components/sections/homepage3/Info6"
import Hero4 from "@/components/sections/homepage4/Hero4"

import Info7 from "@/components/sections/homepage4/Info7"
import Projects3 from "@/components/sections/homepage4/Projects3"

import Whychooseus3 from "@/components/sections/homepage4/Whychooseus3"

export default function Home4() {

    return (
        <>
            <Layout>
            <Hero4 />
                <Info7 />
              
                
                <Projects3 />
                <Info6 />
                <div className="line-border mb-30 mt-70"></div>
             
                <Whychooseus3 />
             
              
                
                <Newsletter1 />
            </Layout>
        </>
    )
}