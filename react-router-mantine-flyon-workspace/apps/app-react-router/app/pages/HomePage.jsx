import {TestComponent} from "@common/ui/components/TestComponent"

const HomePage = ()=>{
    return (
        <div className="HomePage">
           <h1 className="text-3xl text-blue-500 font-bold">HomePage</h1>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit aperiam perspiciatis reprehenderit dolorem nesciunt, voluptate, exercitationem qui voluptatum illo quis quidem sit ratione explicabo nemo cumque earum, eveniet ut dignissimos.</p>
            <TestComponent/>
        </div>
    )
}

export { HomePage }
export default HomePage