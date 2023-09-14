// Property trigger

export interface HomedPropertyTriggerBase {
    type: 'property';
    endpoint: 'string'; //формате "служба/устройство" или "служба/устройство/N", где N это номер конечной точки для многоканальных устройств.
    property: string;
}

export interface HomedPropertyTriggerEquals {
    equals: 'on' | 'off';
}

export interface HomedPropertyTriggerAbove {
    above: number;
}

export interface HomedPropertyTriggerBelow {
    below: number;
}

export interface HomedPropertyTriggerBetween {
    between: [number, number];
}

export type HomedPropertyTrigger = HomedPropertyTriggerBase & (
    HomedPropertyTriggerEquals |
    HomedPropertyTriggerAbove |
    HomedPropertyTriggerBelow |
    HomedPropertyTriggerBetween
);

// Telegram trigger

export interface HomedTelegramTrigger {
    type: 'telegram';
    message: string;
    chats?: number[];
}

// MQTT trigger

export interface HomedMqttTrigger {
    type: 'mqtt';
    topic: string;
    message: string;
}

// Sunrise trigger

export interface HomedSunriseTrigger {
    type: 'sunrise';
    offset: number;
}

// Sunset trigger

export interface HomedSunsetTrigger {
    type: 'sunset';
    offset: number;
}

// Time trigger

export interface HomedTimeTrigger {
    type: 'time';
    time: 'string'; //hh:mm
}

// Trigger

export type HomedTrigger = HomedPropertyTrigger | HomedTelegramTrigger | HomedMqttTrigger | HomedSunriseTrigger | HomedSunsetTrigger | HomedTimeTrigger;

// Property condition

export interface HomedPropertyConditionBase {
    type: 'property';
    endpoint: 'string'; //формате "служба/устройство" или "служба/устройство/N", где N это номер конечной точки для многоканальных устройств.
    property: string;
}

export interface HomedPropertyConditionEquals {
    equals: 'on' | 'off';
}

export interface HomedPropertyConditionDiffers {
    differs: 'on' | 'off';
}

export interface HomedPropertyConditionAbove {
    above: number;
}

export interface HomedPropertyConditionBelow {
    below: number;
}

export interface HomedPropertyConditionBetween {
    between: [number, number];
}

export type HomedPropertyCondition = HomedPropertyConditionBase & (
    HomedPropertyConditionEquals |
    HomedPropertyConditionDiffers |
    HomedPropertyConditionAbove |
    HomedPropertyConditionBelow |
    HomedPropertyConditionBetween
);

// Date Condition

export interface HomedDateConditionBase {
    type: 'date';
}

export interface HomedDateConditionEquals {
    equals: string; //dd.MM
}

export interface HomedDateConditionDiffers {
    differs: string; //dd.MM
}

export interface HomedDateConditionAbove {
    above: string; //dd.MM
}

export interface HomedDateConditionBelow {
    below: string; //dd.MM
}

export interface HomedDateConditionBetween {
    between: [string, string]; //dd.MM
}

export type HomedDateCondition = HomedDateConditionBase & (
    HomedDateConditionEquals |
    HomedDateConditionDiffers |
    HomedDateConditionAbove |
    HomedDateConditionBelow |
    HomedDateConditionBetween
);

// Time Condition

export interface HomedTimeConditionBase {
    type: 'time';
}

export interface HomedTimeConditionEquals {
    equals: string; //hh:mm
}

export interface HomedTimeConditionDiffers {
    differs: string; //hh:mm
}

export interface HomedTimeConditionAbove {
    above: string; //hh:mm
}

export interface HomedTimeConditionBelow {
    below: string; //hh:mm
}

export interface HomedTimeConditionBetween {
    between: [string, string]; //hh:mm
}

export type HomedTimeCondition = HomedTimeConditionBase & (
    HomedTimeConditionEquals |
    HomedTimeConditionDiffers |
    HomedTimeConditionAbove |
    HomedTimeConditionBelow |
    HomedTimeConditionBetween
);

// Week condition

export interface HomedWeekCondition {
    type: 'week';
    days: number[]; // 1-7
}

// Condition

export type HomedCondition = HomedPropertyCondition | HomedDateCondition | HomedTimeCondition | HomedWeekCondition;

// Property action

export interface HomedPropertyActionBase {
    type: 'property';
    endpoint: string; //формате "служба/устройство" или "служба/устройство/N", где N это номер конечной точки для многоканальных устройств.
}

export interface HomedPropertyActionIncrease {
    increase: number;
}

export interface HomedPropertyActionDecrease {
    decrease: number;
}

export interface HomedPropertyActionValue {
    value: string;
}

export type HomedPropertyAction = HomedPropertyActionBase & (
    HomedPropertyActionIncrease |
    HomedPropertyActionDecrease |
    HomedPropertyActionValue
);

// Telegram action

export interface HomedTelegramAction {
    type: 'telegram';
    message: string;
    silent?: boolean;
    chats?: number[];
}

// Shell Action

export interface HomedShellAction {
    type: 'shell';
    command: string;
}

// Mqtt action

export interface HomedMqttAction {
    type: 'mqtt';
    topic: string;
    message: string;
    retain?: boolean;
}

// Action

export type HomedAction = HomedPropertyAction | HomedTelegramAction | HomedShellAction | HomedMqttAction;

// Automation

export interface HomedAutomation {
    active: boolean;
    name: string;
    delay?: number;
    restart?: boolean;
    triggers: HomedTrigger[];
    conditions?: HomedCondition[];
    actions: HomedAction[]
}

// Root

export interface HomedRoot {
    $schema: string;
    automations: HomedAutomation[];
    timestamp?: number;
    version?: string;
}