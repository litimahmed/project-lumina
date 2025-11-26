import { apiClient } from './api';
import { ContactData } from '@/types/contact';

export const contactService = {
  async getContactInfo(): Promise<ContactData> {
    return apiClient.post<ContactData>('/admins/contacte/ajouter/');
  },
};
