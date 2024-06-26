"use client";

import useActiveList from "@/hooks/useActiveList";
import useOtherUser from "@/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import Avatar from "../Avatar";
import AvatarGroup from "../AvatarGroup";
import ProfileDrawer from "./ProfileDrawer";
import { motion } from "framer-motion";
import CallButton from "../CallButton";
import { useRouter } from "next/navigation";
import axios from "axios";

type Props = {
  conversation: Conversation & {
    users: User[];
  };
};

function Header({ conversation }: Props) {
  const otherUser = useOtherUser(conversation);
  const router = useRouter();
  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} Members`;
    }
    return isActive ? "Active" : "Offline";
  }, [conversation, isActive]);

  const handleCall = async () => {
    router.push(`/conversations/${conversation.id}/room`);
  };

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="bg-white dark:bg-neutral-800 w-full flex border-b-[1px] dark:border-b-gray-600 sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-lg">
        <div className="flex gap-3 items-center">
          <Link
            href="/conversations"
            className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
          >
            <HiChevronLeft size={32} />
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup name={conversation.name || otherUser.name} />
          ) : (
            <Avatar user={otherUser} />
          )}
          <div className="flex flex-col">
            <div className="font-bold text-xl">
              {conversation.name || otherUser.name}
            </div>
            <div className="text-sm font-light text-neutral-500 dark:text-neutral-300">
              {statusText}
            </div>
          </div>
        </div>
        <motion.div className="flex items-center flex-row gap-2">
          <CallButton onClick={handleCall} />
          <HiEllipsisHorizontal
            size={32}
            onClick={() => setDrawerOpen(true)}
            className="text-cyan-400 cursor-pointer hover:text-sky-600 transition"
          />
        </motion.div>
      </div>
    </>
  );
}

export default Header;
