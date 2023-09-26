interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Manager'],
  tenantName: 'Business',
  applicationName: 'seven',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View business information', 'Edit personal information', 'View menus', 'Book a table'],
  ownerAbilities: ['Manage user information', 'Manage business information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/38d57ac5-7a10-4dbb-a9b0-46edeed31275',
};
