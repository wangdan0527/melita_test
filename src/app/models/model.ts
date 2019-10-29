export class Subscription {
  constructor(
    public id: number,
    public name: string,
    public type: SubscriptionType,
    public usage: [Usage]
  ) { }
}

export class Usage{
  constructor(
    public type: UsageType,
    public used: number,
    public limit: number
  ) { }
}

export class Offer {
  constructor(
    public id: number,
    public name: string,
    public contractStartDate: string,
    public contractEndDate: string
  ) { }
}

enum SubscriptionType 
{
  INTERNET = "INTERNET",
  TELEPHONY = "TELEPHONY",
  TELEVISION = "TELEVISION",
}

enum UsageType 
{
  DATA = "DATA",
  SMS = "SMS"
}