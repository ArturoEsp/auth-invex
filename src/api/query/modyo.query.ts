import { useQuery } from "@tanstack/vue-query";
import { modyoMeService } from "..";

export const useModyoMeQuery = () => useQuery(['ModyoMe'], modyoMeService);

