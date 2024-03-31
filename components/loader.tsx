import Image from "next/image";


export const Loader = () =>{
    return (
        <div className="h-full flex flex-col gap-y-4 items-center
        justify-center">
            <div className="w-12 h-12 relative animate-spin items-center">
                <Image
                alt="logo" 
                fill
                src ="/logorobo.png"/>
                
            </div>
            <p className="text-sm text-muted-foreground tiems-center">
                AI is thinking...
            </p>
        </div>
    );
};