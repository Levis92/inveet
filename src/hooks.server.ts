import { SvelteKitAuth } from '@auth/sveltekit';
import AzureAdB2C from '@auth/core/providers/azure-ad-b2c';
import type { Provider } from '@auth/core/providers';
import type {Profile} from '@auth/core/types'
import type { Handle } from "@sveltejs/kit";
import { AZURE_AD_B2C_ID, AZURE_AD_B2C_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [AzureAdB2C({ clientId: '', userinfo: '' })]
}) satisfies Handle;
