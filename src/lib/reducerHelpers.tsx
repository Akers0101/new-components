//import { store } from "../store/index";

// Define your types here if needed
type User = {
  sasEntityHierarchyId: number;
  // Add other user properties as needed
};

type Filter = {
  // Define your filter type
};

type Permission = {
  map: {
    [key: string]: string[];
  };
  // Add other permission properties as needed
};

type State = {
  page: number;
  pageSize: number;
  sortBy: string;
  sortDirection: string;
  filters?: Filter;
};

// Helper function for merging objects
const mergeObjects = <T, U>(objA: T, objB: U): T & U => {
  return { ...objA, ...objB };
};

// Extract filter from the input object
const extractFilter = (input: { filters?: Filter }): { filters?: Filter } => {
  return { filters: input.filters };
};

// Sleep function with Promise
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Check if hierarchy is valid
const checkHierarchy = (
  hierarchyId: number | undefined,
  user: User
): boolean => {
  return (
    hierarchyId === undefined ||
    (user && hierarchyId <= user?.sasEntityHierarchyId)
  );
};

// Check if user has permission
const checkPermission = (
  permission: string | string[] | { [key: string]: string[] },
  target: string | string[]
): boolean => {
  if (typeof permission === "string") {
    return Array.isArray(target) ? target.includes(permission) : false;
  }

  if (Array.isArray(permission)) {
    return (
      !target ||
      target.length < 1 ||
      
      target.every((item) => permission.includes(item))
    );
  }

  if (typeof permission === "object") {
    for (const key of Object.keys(permission)) {
      if (
        permission[key] &&
        (!target || target.length < 1 || permission[key].includes(target))
      ) {
        return true;
      }
    }
  }

  return false;
};

// Format bytes
const formatBytes = (bytes: number, decimals = 2): string => {
  if (!+bytes) {
    return "0 Bytes";
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export {
  extractFilter,
  sleep,
  checkHierarchy,
  checkPermission,
  formatBytes,
  mergeObjects,
};
