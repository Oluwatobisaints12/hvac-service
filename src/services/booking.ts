export default {
  "name": "Booking",
  "type": "object",
  "properties": {
    "customer_name": {
      "type": "string",
      "description": "Full name of the customer"
    },
    "customer_email": {
      "type": "string",
      "description": "Customer email address"
    },
    "customer_phone": {
      "type": "string",
      "description": "Customer phone number"
    },
    "service_type": {
      "type": "string",
      "enum": [
        "duct_vent_cleaning",
        "general_cleaning",
        "filter_replacement",
        "system_maintenance",
        "vent_cleaning"
      ],
      "description": "Type of service requested"
    },
    "symptom": {
      "type": "string",
      "enum": [
        "weak_airflow",
        "odors",
        "unusual_noise",
        "temperature_inconsistency",
        "routine_check"
      ],
      "description": "Primary symptom or reason for service"
    },
    "preferred_date": {
      "type": "string",
      "format": "date",
      "description": "Preferred service date"
    },
    "preferred_time": {
      "type": "string",
      "enum": [
        "morning",
        "afternoon",
        "evening"
      ],
      "description": "Preferred time slot"
    },
    "address": {
      "type": "string",
      "description": "Service address"
    },
    "notes": {
      "type": "string",
      "description": "Additional notes or details"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "confirmed",
        "in_progress",
        "completed",
        "cancelled"
      ],
      "default": "pending",
      "description": "Booking status"
    }
  },
  "required": [
    "customer_name",
    "customer_email",
    "service_type",
    "preferred_date"
  ]
};