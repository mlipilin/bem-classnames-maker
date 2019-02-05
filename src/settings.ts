export interface ISettings {
    BLOCK_ELEMENT_DELIMITER: string,
    MOD_DELIMITER: string,
    MOD_VALUE_DELIMITER?: string,
};

const DEFAULT_SETTINGS: ISettings = {
    BLOCK_ELEMENT_DELIMITER :'__',
    MOD_DELIMITER:'--',
    MOD_VALUE_DELIMITER:'-',
}

export default DEFAULT_SETTINGS;
