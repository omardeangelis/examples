"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useRef } from "react";
import { userFormSchema, type UserFormValues } from "../_utils/userFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const resolver = zodResolver(userFormSchema);
const defaultValues: UserFormValues = {
  name: "",
  email: "",
  username: "",
};

export const UserForm = () => {
  const form = useForm<UserFormValues>({
    defaultValues,
    resolver,
    mode: "onTouched",
  });

  const formRef = useRef<null | HTMLFormElement>(null);

  return (
    <>
      <Form {...form}>
        <form ref={formRef} className="space-y-8 w-full max-w-[728px]">
          <div className="flex gap-2 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="name">name</FormLabel>
                    <Input {...field} />
                    <FormDescription>Il tuo nome</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel>Prova</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit" disabled={!form.formState.isValid}>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
