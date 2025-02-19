> **Warning**
>
> ## THIS IS AN AUTOGENERATED FILE. DO NOT EDIT.
>
> ## Please edit the corresponding file in [/packages/mermaid/src/docs/config/setup/modules/config.md](../../../../packages/mermaid/src/docs/config/setup/modules/config.md).

# Module: config

## Variables

### defaultConfig

• `Const` **defaultConfig**: [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

#### Defined in

[packages/mermaid/src/config.ts:8](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L8)

## Functions

### addDirective

▸ **addDirective**(`directive`): `void`

Pushes in a directive to the configuration

#### Parameters

| Name        | Type                                                      | Description              |
| :---------- | :-------------------------------------------------------- | :----------------------- |
| `directive` | [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md) | The directive to push in |

#### Returns

`void`

#### Defined in

[packages/mermaid/src/config.ts:188](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L188)

***

### getConfig

▸ **getConfig**(): [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

## getConfig

| Function  | Description               | Type        | Return Values                  |
| --------- | ------------------------- | ----------- | ------------------------------ |
| getConfig | Obtains the currentConfig | Get Request | Any Values from current Config |

**Notes**: Avoid calling this function repeatedly. Instead, store the result in a variable and use it, and pass it down to function calls.

#### Returns

[`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

The currentConfig

#### Defined in

[packages/mermaid/src/config.ts:131](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L131)

***

### getSiteConfig

▸ **getSiteConfig**(): [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

## getSiteConfig

| Function      | Description                                       | Type        | Values                           |
| ------------- | ------------------------------------------------- | ----------- | -------------------------------- |
| setSiteConfig | Returns the current siteConfig base configuration | Get Request | Returns Any Values in siteConfig |

**Notes**: Returns **any** values in siteConfig.

#### Returns

[`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

The siteConfig

#### Defined in

[packages/mermaid/src/config.ts:96](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L96)

***

### reset

▸ **reset**(`config?`): `void`

## reset

| Function | Description                  | Type        | Required | Values |
| -------- | ---------------------------- | ----------- | -------- | ------ |
| reset    | Resets currentConfig to conf | Put Request | Required | None   |

## conf

| Parameter | Description                                                    | Type       | Required | Values                                       |
| --------- | -------------------------------------------------------------- | ---------- | -------- | -------------------------------------------- |
| conf      | base set of values, which currentConfig could be **reset** to. | Dictionary | Required | Any Values, with respect to the secure Array |

**Notes**: (default: current siteConfig ) (optional, default `getSiteConfig()`)

#### Parameters

| Name     | Type                                                      | Default value | Description                                                                                                                                                   |
| :------- | :-------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `config` | [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md) | `siteConfig`  | base set of values, which currentConfig could be **reset** to. Defaults to the current siteConfig (e.g returned by [getSiteConfig](config.md#getsiteconfig)). |

#### Returns

`void`

#### Defined in

[packages/mermaid/src/config.ts:221](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L221)

***

### sanitize

▸ **sanitize**(`options`): `void`

## sanitize

| Function | Description                            | Type        | Values |
| -------- | -------------------------------------- | ----------- | ------ |
| sanitize | Sets the siteConfig to desired values. | Put Request | None   |

Ensures options parameter does not attempt to override siteConfig secure keys **Notes**: modifies
options in-place

#### Parameters

| Name      | Type  | Description                       |
| :-------- | :---- | :-------------------------------- |
| `options` | `any` | The potential setConfig parameter |

#### Returns

`void`

#### Defined in

[packages/mermaid/src/config.ts:146](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L146)

***

### saveConfigFromInitialize

▸ **saveConfigFromInitialize**(`conf`): `void`

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `conf` | [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md) |

#### Returns

`void`

#### Defined in

[packages/mermaid/src/config.ts:75](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L75)

***

### setConfig

▸ **setConfig**(`conf`): [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

## setConfig

| Function      | Description                           | Type        | Values                                  |
| ------------- | ------------------------------------- | ----------- | --------------------------------------- |
| setSiteConfig | Sets the siteConfig to desired values | Put Request | Any Values, except ones in secure array |

**Notes**: Sets the currentConfig. The parameter conf is sanitized based on the siteConfig.secure
keys. Any values found in conf with key found in siteConfig.secure will be replaced with the
corresponding siteConfig value.

#### Parameters

| Name   | Type                                                      | Description                 |
| :----- | :-------------------------------------------------------- | :-------------------------- |
| `conf` | [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md) | The potential currentConfig |

#### Returns

[`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

The currentConfig merged with the sanitized conf

#### Defined in

[packages/mermaid/src/config.ts:113](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L113)

***

### setSiteConfig

▸ **setSiteConfig**(`conf`): [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

## setSiteConfig

| Function      | Description                           | Type        | Values                                  |
| ------------- | ------------------------------------- | ----------- | --------------------------------------- |
| setSiteConfig | Sets the siteConfig to desired values | Put Request | Any Values, except ones in secure array |

**Notes:** Sets the siteConfig. The siteConfig is a protected configuration for repeat use. Calls
to reset() will reset the currentConfig to siteConfig. Calls to reset(configApi.defaultConfig)
will reset siteConfig and currentConfig to the defaultConfig Note: currentConfig is set in this
function *Default value: At default, will mirror Global Config*

#### Parameters

| Name   | Type                                                      | Description                                 |
| :----- | :-------------------------------------------------------- | :------------------------------------------ |
| `conf` | [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md) | The base currentConfig to use as siteConfig |

#### Returns

[`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

The new siteConfig

#### Defined in

[packages/mermaid/src/config.ts:61](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L61)

***

### updateCurrentConfig

▸ **updateCurrentConfig**(`siteCfg`, `_directives`): [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

#### Parameters

| Name          | Type                                                         |
| :------------ | :----------------------------------------------------------- |
| `siteCfg`     | [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)    |
| `_directives` | [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)\[] |

#### Returns

[`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

#### Defined in

[packages/mermaid/src/config.ts:15](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L15)

***

### updateSiteConfig

▸ **updateSiteConfig**(`conf`): [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `conf` | [`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md) |

#### Returns

[`MermaidConfig`](../interfaces/mermaid.MermaidConfig.md)

#### Defined in

[packages/mermaid/src/config.ts:79](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.ts#L79)
