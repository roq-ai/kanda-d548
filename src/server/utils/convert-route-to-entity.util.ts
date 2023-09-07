const mapping: Record<string, string> = {
  clients: 'client',
  documents: 'document',
  employees: 'employee',
  inventories: 'inventory',
  organizations: 'organization',
  properties: 'property',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
