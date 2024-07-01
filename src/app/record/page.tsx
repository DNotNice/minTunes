"use client"
import React, { useState, useRef } from 'react';
import AudioComponent from "@/components/ui/AudioComponent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import toast from 'react-hot-toast';

const Page: React.FC = () => {
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number | undefined>(undefined);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStartRecording = (): void => {
    setIsRecording(true);
  };

  const handleStopRecording = (audioUrl: string): void => {
    setIsRecording(false);
    setRecordedAudioUrl(audioUrl);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setPrice(value === '' ? undefined : parseFloat(value));
  };

  const handleButtonClicked = () =>{
  if(!price || !name || !recordedAudioUrl){
    toast.error("some field is empty " , {duration :1000})
  }
  else {
    toast('Awesome \n Now let me convert this to an NFT!',
      {
        duration : 2000,
        icon: '👏✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );

    setTimeout( ()=>{
      toast.success("successfully uploaded to marketplace" ,{duration : 2000  ,style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },} )
    },4000)
  }
}

  return (
    <div>
      <div className="flex justify-center mt-5">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 bg-mattBlack">
            <TabsTrigger value="account">Record</TabsTrigger>
            <TabsTrigger value="password">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className='bg-o'>
              <CardHeader>
                <CardTitle>Record</CardTitle>
                <CardDescription>
                  Record your voice here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className='flex justify-normal'>
                  <AudioComponent 
                    isRecording={isRecording}
                    onStartRecording={handleStartRecording}
                    onStopRecording={handleStopRecording}
                    audioUrl={recordedAudioUrl}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>NFT details</CardTitle>
                <CardDescription>
                  Enter the details of your NFT
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Name</Label>
                  <Input id="current" type="text" value={name} onChange={handleNameChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Price (in sol)</Label>
                  <Input id="new" type="number" value={price?.toString() || ''} onChange={handlePriceChange} />
                </div>
                {recordedAudioUrl && (
                  <div>
                    <Label>Recorded Audio</Label>
                    <audio ref={audioRef} src={recordedAudioUrl} controls />
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className='flex justify-center mt-5'> 
        <Button onClick={()=> handleButtonClicked()}> Upload </Button>
      </div>
    </div>
  );
}



export default Page;