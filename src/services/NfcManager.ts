import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

// Initialize NFC Manager
NfcManager.start();

export const readTag = async () => {
    try {
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const tag = await NfcManager.getTag();
        return tag;
    } catch (ex) {
        console.warn(ex);
    } finally {
        NfcManager.cancelTechnologyRequest();
    }
};

export const writeTag = async (data: string) => {
    try {
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const bytes = Ndef.encodeMessage([Ndef.textRecord(data)]);
        if (bytes) {
            await NfcManager.ndefHandler.writeNdefMessage(bytes);
            return 'Write Successful';
        }
    } catch (ex) {
        console.warn(ex);
    } finally {
        NfcManager.cancelTechnologyRequest();
    }
};
