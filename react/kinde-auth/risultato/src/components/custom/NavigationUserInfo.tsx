import { KindeUser } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useMemo } from "react";

export const NavigationUserInfo = (props: KindeUser) => {
  const avatarFallback = useMemo(() => {
    if (props.given_name && props.family_name)
      return `${props.given_name?.[0]}${props.family_name?.[0]}`;
    return "ME";
  }, [props.given_name, props.family_name]);
  console.log("NavigationUserInfo", props.picture);
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Avatar>
        <AvatarImage src={props.picture ?? undefined} />
        <AvatarFallback className="text-black">{avatarFallback}</AvatarFallback>
      </Avatar>
      <p className="text-neutral-500 text-xs text-center">{props.email}</p>
    </div>
  );
};
