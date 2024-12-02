"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";

const CommentSection = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [message, setMessage] = useState("");

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {isCommenting ? (
        <div>
          <Textarea
            placeholder="What's on your mind..."
            className="resize-none"
            onChange={onMessageChange}
            value={message}
            rows={4}
          />
          <div className="mt-3 flex justify-end gap-3">
            <Button variant={"outline"} onClick={() => setIsCommenting(false)}>
              Cancel
            </Button>
            <Button>Post</Button>
          </div>
        </div>
      ) : (
        <Button
          variant={"outline"}
          className="hidden md:inline-flex"
          onClick={() => setIsCommenting(true)}
        >
          Add Comment
        </Button>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="inline-flex md:hidden">
            Add Comment
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Comment</DialogTitle>
            <DialogDescription>
              {
                "Make changes to your profile here. Click save when you're done."
              }
            </DialogDescription>
          </DialogHeader>
          <div>
            <Textarea
              placeholder="What's on your mind..."
              className="resize-none"
              onChange={onMessageChange}
              value={message}
            />
          </div>
          <DialogFooter className="flex flex-col">
            <DialogClose asChild>
              <Button variant={"outline"}>Cancel</Button>
            </DialogClose>
            <Button>Post</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CommentSection;
