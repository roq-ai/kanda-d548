interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Real Estate Agent', 'Office Manager'],
  tenantName: 'Organization',
  applicationName: 'KandA',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    "Manage Organization's information",
    'Invite and manage members of the Organization',
    'Assign roles to Organization members',
    'Manage documents, client, property, employee, and asset details',
  ],
};
